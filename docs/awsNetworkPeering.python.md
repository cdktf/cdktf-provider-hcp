# `awsNetworkPeering` Submodule <a name="`awsNetworkPeering` Submodule" id="@cdktf/provider-hcp.awsNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsNetworkPeering <a name="AwsNetworkPeering" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering hcp_aws_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import aws_network_peering

awsNetworkPeering.AwsNetworkPeering(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hvn_id: str,
  peer_account_id: str,
  peering_id: str,
  peer_vpc_id: str,
  peer_vpc_region: str,
  id: str = None,
  project_id: str = None,
  timeouts: AwsNetworkPeeringTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.hvnId">hvn_id</a></code> | <code>str</code> | The ID of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.peerAccountId">peer_account_id</a></code> | <code>str</code> | The account ID of the peer VPC in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.peeringId">peering_id</a></code> | <code>str</code> | The ID of the network peering. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.peerVpcId">peer_vpc_id</a></code> | <code>str</code> | The ID of the peer VPC in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.peerVpcRegion">peer_vpc_region</a></code> | <code>str</code> | The region of the peer VPC in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#id AwsNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the network peering is located. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts">AwsNetworkPeeringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.hvnId"></a>

- *Type:* str

The ID of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#hvn_id AwsNetworkPeering#hvn_id}

---

##### `peer_account_id`<sup>Required</sup> <a name="peer_account_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.peerAccountId"></a>

- *Type:* str

The account ID of the peer VPC in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#peer_account_id AwsNetworkPeering#peer_account_id}

---

##### `peering_id`<sup>Required</sup> <a name="peering_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.peeringId"></a>

- *Type:* str

The ID of the network peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#peering_id AwsNetworkPeering#peering_id}

---

##### `peer_vpc_id`<sup>Required</sup> <a name="peer_vpc_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.peerVpcId"></a>

- *Type:* str

The ID of the peer VPC in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#peer_vpc_id AwsNetworkPeering#peer_vpc_id}

---

##### `peer_vpc_region`<sup>Required</sup> <a name="peer_vpc_region" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.peerVpcRegion"></a>

- *Type:* str

The region of the peer VPC in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#peer_vpc_region AwsNetworkPeering#peer_vpc_region}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#id AwsNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where the network peering is located.

Always matches the HVN's project.
If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#project_id AwsNetworkPeering#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts">AwsNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#timeouts AwsNetworkPeering#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#create AwsNetworkPeering#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#default AwsNetworkPeering#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#delete AwsNetworkPeering#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AwsNetworkPeering resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import aws_network_peering

awsNetworkPeering.AwsNetworkPeering.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import aws_network_peering

awsNetworkPeering.AwsNetworkPeering.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import aws_network_peering

awsNetworkPeering.AwsNetworkPeering.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import aws_network_peering

awsNetworkPeering.AwsNetworkPeering.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AwsNetworkPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AwsNetworkPeering to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AwsNetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AwsNetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.providerPeeringId">provider_peering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference">AwsNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.hvnIdInput">hvn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerAccountIdInput">peer_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peeringIdInput">peering_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerVpcIdInput">peer_vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerVpcRegionInput">peer_vpc_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts">AwsNetworkPeeringTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.hvnId">hvn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerAccountId">peer_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peeringId">peering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerVpcId">peer_vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerVpcRegion">peer_vpc_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `provider_peering_id`<sup>Required</sup> <a name="provider_peering_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.providerPeeringId"></a>

```python
provider_peering_id: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.timeouts"></a>

```python
timeouts: AwsNetworkPeeringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference">AwsNetworkPeeringTimeoutsOutputReference</a>

---

##### `hvn_id_input`<sup>Optional</sup> <a name="hvn_id_input" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.hvnIdInput"></a>

```python
hvn_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `peer_account_id_input`<sup>Optional</sup> <a name="peer_account_id_input" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerAccountIdInput"></a>

```python
peer_account_id_input: str
```

- *Type:* str

---

##### `peering_id_input`<sup>Optional</sup> <a name="peering_id_input" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peeringIdInput"></a>

```python
peering_id_input: str
```

- *Type:* str

---

##### `peer_vpc_id_input`<sup>Optional</sup> <a name="peer_vpc_id_input" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerVpcIdInput"></a>

```python
peer_vpc_id_input: str
```

- *Type:* str

---

##### `peer_vpc_region_input`<sup>Optional</sup> <a name="peer_vpc_region_input" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerVpcRegionInput"></a>

```python
peer_vpc_region_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[AwsNetworkPeeringTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts">AwsNetworkPeeringTimeouts</a>, cdktf.IResolvable]

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.hvnId"></a>

```python
hvn_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `peer_account_id`<sup>Required</sup> <a name="peer_account_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerAccountId"></a>

```python
peer_account_id: str
```

- *Type:* str

---

##### `peering_id`<sup>Required</sup> <a name="peering_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peeringId"></a>

```python
peering_id: str
```

- *Type:* str

---

##### `peer_vpc_id`<sup>Required</sup> <a name="peer_vpc_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerVpcId"></a>

```python
peer_vpc_id: str
```

- *Type:* str

---

##### `peer_vpc_region`<sup>Required</sup> <a name="peer_vpc_region" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerVpcRegion"></a>

```python
peer_vpc_region: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AwsNetworkPeeringConfig <a name="AwsNetworkPeeringConfig" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import aws_network_peering

awsNetworkPeering.AwsNetworkPeeringConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hvn_id: str,
  peer_account_id: str,
  peering_id: str,
  peer_vpc_id: str,
  peer_vpc_region: str,
  id: str = None,
  project_id: str = None,
  timeouts: AwsNetworkPeeringTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.hvnId">hvn_id</a></code> | <code>str</code> | The ID of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.peerAccountId">peer_account_id</a></code> | <code>str</code> | The account ID of the peer VPC in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.peeringId">peering_id</a></code> | <code>str</code> | The ID of the network peering. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.peerVpcId">peer_vpc_id</a></code> | <code>str</code> | The ID of the peer VPC in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.peerVpcRegion">peer_vpc_region</a></code> | <code>str</code> | The region of the peer VPC in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#id AwsNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the network peering is located. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts">AwsNetworkPeeringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.hvnId"></a>

```python
hvn_id: str
```

- *Type:* str

The ID of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#hvn_id AwsNetworkPeering#hvn_id}

---

##### `peer_account_id`<sup>Required</sup> <a name="peer_account_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.peerAccountId"></a>

```python
peer_account_id: str
```

- *Type:* str

The account ID of the peer VPC in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#peer_account_id AwsNetworkPeering#peer_account_id}

---

##### `peering_id`<sup>Required</sup> <a name="peering_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.peeringId"></a>

```python
peering_id: str
```

- *Type:* str

The ID of the network peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#peering_id AwsNetworkPeering#peering_id}

---

##### `peer_vpc_id`<sup>Required</sup> <a name="peer_vpc_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.peerVpcId"></a>

```python
peer_vpc_id: str
```

- *Type:* str

The ID of the peer VPC in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#peer_vpc_id AwsNetworkPeering#peer_vpc_id}

---

##### `peer_vpc_region`<sup>Required</sup> <a name="peer_vpc_region" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.peerVpcRegion"></a>

```python
peer_vpc_region: str
```

- *Type:* str

The region of the peer VPC in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#peer_vpc_region AwsNetworkPeering#peer_vpc_region}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#id AwsNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where the network peering is located.

Always matches the HVN's project.
If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#project_id AwsNetworkPeering#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.timeouts"></a>

```python
timeouts: AwsNetworkPeeringTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts">AwsNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#timeouts AwsNetworkPeering#timeouts}

---

### AwsNetworkPeeringTimeouts <a name="AwsNetworkPeeringTimeouts" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import aws_network_peering

awsNetworkPeering.AwsNetworkPeeringTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#create AwsNetworkPeering#create}. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#default AwsNetworkPeering#default}. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#delete AwsNetworkPeering#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#create AwsNetworkPeering#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#default AwsNetworkPeering#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/resources/aws_network_peering#delete AwsNetworkPeering#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AwsNetworkPeeringTimeoutsOutputReference <a name="AwsNetworkPeeringTimeoutsOutputReference" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import aws_network_peering

awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts">AwsNetworkPeeringTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AwsNetworkPeeringTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts">AwsNetworkPeeringTimeouts</a>, cdktf.IResolvable]

---




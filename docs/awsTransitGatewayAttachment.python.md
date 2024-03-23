# `awsTransitGatewayAttachment` Submodule <a name="`awsTransitGatewayAttachment` Submodule" id="@cdktf/provider-hcp.awsTransitGatewayAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsTransitGatewayAttachment <a name="AwsTransitGatewayAttachment" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment hcp_aws_transit_gateway_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import aws_transit_gateway_attachment

awsTransitGatewayAttachment.AwsTransitGatewayAttachment(
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
  resource_share_arn: str,
  transit_gateway_attachment_id: str,
  transit_gateway_id: str,
  id: str = None,
  project_id: str = None,
  timeouts: AwsTransitGatewayAttachmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.hvnId">hvn_id</a></code> | <code>str</code> | The ID of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.resourceShareArn">resource_share_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Resource Share that is needed to grant HCP access to the transit gateway in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | The user-settable name of the transit gateway attachment in HCP. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | The ID of the user-owned transit gateway in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#id AwsTransitGatewayAttachment#id}. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the transit gateway attachment is located."  If not specified, the project specified in the HCP Provider config block will be used, if configured. If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.hvnId"></a>

- *Type:* str

The ID of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#hvn_id AwsTransitGatewayAttachment#hvn_id}

---

##### `resource_share_arn`<sup>Required</sup> <a name="resource_share_arn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.resourceShareArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Resource Share that is needed to grant HCP access to the transit gateway in AWS.

The Resource Share should be associated with the HCP AWS account principal (see [aws_ram_principal_association](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ram_principal_association)) and the transit gateway resource (see [aws_ram_resource_association](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ram_resource_association))

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#resource_share_arn AwsTransitGatewayAttachment#resource_share_arn}

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.transitGatewayAttachmentId"></a>

- *Type:* str

The user-settable name of the transit gateway attachment in HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#transit_gateway_attachment_id AwsTransitGatewayAttachment#transit_gateway_attachment_id}

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.transitGatewayId"></a>

- *Type:* str

The ID of the user-owned transit gateway in AWS.

The AWS region of the transit gateway must match the HVN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#transit_gateway_id AwsTransitGatewayAttachment#transit_gateway_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#id AwsTransitGatewayAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where the transit gateway attachment is located."  If not specified, the project specified in the HCP Provider config block will be used, if configured. If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#project_id AwsTransitGatewayAttachment#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#timeouts AwsTransitGatewayAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#create AwsTransitGatewayAttachment#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#default AwsTransitGatewayAttachment#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#delete AwsTransitGatewayAttachment#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AwsTransitGatewayAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import aws_transit_gateway_attachment

awsTransitGatewayAttachment.AwsTransitGatewayAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import aws_transit_gateway_attachment

awsTransitGatewayAttachment.AwsTransitGatewayAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import aws_transit_gateway_attachment

awsTransitGatewayAttachment.AwsTransitGatewayAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import aws_transit_gateway_attachment

awsTransitGatewayAttachment.AwsTransitGatewayAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AwsTransitGatewayAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AwsTransitGatewayAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AwsTransitGatewayAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AwsTransitGatewayAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.providerTransitGatewayAttachmentId">provider_transit_gateway_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference">AwsTransitGatewayAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.hvnIdInput">hvn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.resourceShareArnInput">resource_share_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayAttachmentIdInput">transit_gateway_attachment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayIdInput">transit_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.hvnId">hvn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.resourceShareArn">resource_share_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `provider_transit_gateway_attachment_id`<sup>Required</sup> <a name="provider_transit_gateway_attachment_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.providerTransitGatewayAttachmentId"></a>

```python
provider_transit_gateway_attachment_id: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.timeouts"></a>

```python
timeouts: AwsTransitGatewayAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference">AwsTransitGatewayAttachmentTimeoutsOutputReference</a>

---

##### `hvn_id_input`<sup>Optional</sup> <a name="hvn_id_input" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.hvnIdInput"></a>

```python
hvn_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `resource_share_arn_input`<sup>Optional</sup> <a name="resource_share_arn_input" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.resourceShareArnInput"></a>

```python
resource_share_arn_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AwsTransitGatewayAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a>]

---

##### `transit_gateway_attachment_id_input`<sup>Optional</sup> <a name="transit_gateway_attachment_id_input" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayAttachmentIdInput"></a>

```python
transit_gateway_attachment_id_input: str
```

- *Type:* str

---

##### `transit_gateway_id_input`<sup>Optional</sup> <a name="transit_gateway_id_input" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayIdInput"></a>

```python
transit_gateway_id_input: str
```

- *Type:* str

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.hvnId"></a>

```python
hvn_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `resource_share_arn`<sup>Required</sup> <a name="resource_share_arn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.resourceShareArn"></a>

```python
resource_share_arn: str
```

- *Type:* str

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayAttachmentId"></a>

```python
transit_gateway_attachment_id: str
```

- *Type:* str

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AwsTransitGatewayAttachmentConfig <a name="AwsTransitGatewayAttachmentConfig" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import aws_transit_gateway_attachment

awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hvn_id: str,
  resource_share_arn: str,
  transit_gateway_attachment_id: str,
  transit_gateway_id: str,
  id: str = None,
  project_id: str = None,
  timeouts: AwsTransitGatewayAttachmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.hvnId">hvn_id</a></code> | <code>str</code> | The ID of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.resourceShareArn">resource_share_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Resource Share that is needed to grant HCP access to the transit gateway in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | The user-settable name of the transit gateway attachment in HCP. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | The ID of the user-owned transit gateway in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#id AwsTransitGatewayAttachment#id}. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the transit gateway attachment is located."  If not specified, the project specified in the HCP Provider config block will be used, if configured. If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.hvnId"></a>

```python
hvn_id: str
```

- *Type:* str

The ID of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#hvn_id AwsTransitGatewayAttachment#hvn_id}

---

##### `resource_share_arn`<sup>Required</sup> <a name="resource_share_arn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.resourceShareArn"></a>

```python
resource_share_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Resource Share that is needed to grant HCP access to the transit gateway in AWS.

The Resource Share should be associated with the HCP AWS account principal (see [aws_ram_principal_association](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ram_principal_association)) and the transit gateway resource (see [aws_ram_resource_association](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ram_resource_association))

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#resource_share_arn AwsTransitGatewayAttachment#resource_share_arn}

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.transitGatewayAttachmentId"></a>

```python
transit_gateway_attachment_id: str
```

- *Type:* str

The user-settable name of the transit gateway attachment in HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#transit_gateway_attachment_id AwsTransitGatewayAttachment#transit_gateway_attachment_id}

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

The ID of the user-owned transit gateway in AWS.

The AWS region of the transit gateway must match the HVN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#transit_gateway_id AwsTransitGatewayAttachment#transit_gateway_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#id AwsTransitGatewayAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where the transit gateway attachment is located."  If not specified, the project specified in the HCP Provider config block will be used, if configured. If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#project_id AwsTransitGatewayAttachment#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.timeouts"></a>

```python
timeouts: AwsTransitGatewayAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#timeouts AwsTransitGatewayAttachment#timeouts}

---

### AwsTransitGatewayAttachmentTimeouts <a name="AwsTransitGatewayAttachmentTimeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import aws_transit_gateway_attachment

awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#create AwsTransitGatewayAttachment#create}. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#default AwsTransitGatewayAttachment#default}. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#delete AwsTransitGatewayAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#create AwsTransitGatewayAttachment#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#default AwsTransitGatewayAttachment#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/aws_transit_gateway_attachment#delete AwsTransitGatewayAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AwsTransitGatewayAttachmentTimeoutsOutputReference <a name="AwsTransitGatewayAttachmentTimeoutsOutputReference" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import aws_transit_gateway_attachment

awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AwsTransitGatewayAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a>]

---




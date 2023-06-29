# `data_hcp_aws_network_peering`

Refer to the Terraform Registory for docs: [`data_hcp_aws_network_peering`](https://registry.terraform.io/providers/hashicorp/hcp/0.63.0/docs/data-sources/aws_network_peering).

# `dataHcpAwsNetworkPeering` Submodule <a name="`dataHcpAwsNetworkPeering` Submodule" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpAwsNetworkPeering <a name="DataHcpAwsNetworkPeering" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.63.0/docs/data-sources/aws_network_peering hcp_aws_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_aws_network_peering

dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering(
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
  peering_id: str,
  id: str = None,
  project_id: str = None,
  timeouts: DataHcpAwsNetworkPeeringTimeouts = None,
  wait_for_active_state: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.hvnId">hvn_id</a></code> | <code>str</code> | The ID of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.peeringId">peering_id</a></code> | <code>str</code> | The ID of the network peering. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.63.0/docs/data-sources/aws_network_peering#id DataHcpAwsNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the network peering is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeouts">DataHcpAwsNetworkPeeringTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.waitForActiveState">wait_for_active_state</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, Terraform will wait for the network peering to reach an `ACTIVE` state before continuing. Default `false`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.hvnId"></a>

- *Type:* str

The ID of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.63.0/docs/data-sources/aws_network_peering#hvn_id DataHcpAwsNetworkPeering#hvn_id}

---

##### `peering_id`<sup>Required</sup> <a name="peering_id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.peeringId"></a>

- *Type:* str

The ID of the network peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.63.0/docs/data-sources/aws_network_peering#peering_id DataHcpAwsNetworkPeering#peering_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.63.0/docs/data-sources/aws_network_peering#id DataHcpAwsNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where the network peering is located.

Always matches the HVN's project.
If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.63.0/docs/data-sources/aws_network_peering#project_id DataHcpAwsNetworkPeering#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeouts">DataHcpAwsNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.63.0/docs/data-sources/aws_network_peering#timeouts DataHcpAwsNetworkPeering#timeouts}

---

##### `wait_for_active_state`<sup>Optional</sup> <a name="wait_for_active_state" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.Initializer.parameter.waitForActiveState"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, Terraform will wait for the network peering to reach an `ACTIVE` state before continuing. Default `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.63.0/docs/data-sources/aws_network_peering#wait_for_active_state DataHcpAwsNetworkPeering#wait_for_active_state}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.resetWaitForActiveState">reset_wait_for_active_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.63.0/docs/data-sources/aws_network_peering#read DataHcpAwsNetworkPeering#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_wait_for_active_state` <a name="reset_wait_for_active_state" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.resetWaitForActiveState"></a>

```python
def reset_wait_for_active_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_aws_network_peering

dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_aws_network_peering

dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_aws_network_peering

dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.peerAccountId">peer_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.peerVpcId">peer_vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.peerVpcRegion">peer_vpc_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.providerPeeringId">provider_peering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference">DataHcpAwsNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.hvnIdInput">hvn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.peeringIdInput">peering_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeouts">DataHcpAwsNetworkPeeringTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.waitForActiveStateInput">wait_for_active_state_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.hvnId">hvn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.peeringId">peering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.waitForActiveState">wait_for_active_state</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `peer_account_id`<sup>Required</sup> <a name="peer_account_id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.peerAccountId"></a>

```python
peer_account_id: str
```

- *Type:* str

---

##### `peer_vpc_id`<sup>Required</sup> <a name="peer_vpc_id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.peerVpcId"></a>

```python
peer_vpc_id: str
```

- *Type:* str

---

##### `peer_vpc_region`<sup>Required</sup> <a name="peer_vpc_region" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.peerVpcRegion"></a>

```python
peer_vpc_region: str
```

- *Type:* str

---

##### `provider_peering_id`<sup>Required</sup> <a name="provider_peering_id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.providerPeeringId"></a>

```python
provider_peering_id: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.timeouts"></a>

```python
timeouts: DataHcpAwsNetworkPeeringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference">DataHcpAwsNetworkPeeringTimeoutsOutputReference</a>

---

##### `hvn_id_input`<sup>Optional</sup> <a name="hvn_id_input" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.hvnIdInput"></a>

```python
hvn_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `peering_id_input`<sup>Optional</sup> <a name="peering_id_input" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.peeringIdInput"></a>

```python
peering_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataHcpAwsNetworkPeeringTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeouts">DataHcpAwsNetworkPeeringTimeouts</a>]

---

##### `wait_for_active_state_input`<sup>Optional</sup> <a name="wait_for_active_state_input" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.waitForActiveStateInput"></a>

```python
wait_for_active_state_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.hvnId"></a>

```python
hvn_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `peering_id`<sup>Required</sup> <a name="peering_id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.peeringId"></a>

```python
peering_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `wait_for_active_state`<sup>Required</sup> <a name="wait_for_active_state" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.waitForActiveState"></a>

```python
wait_for_active_state: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeering.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpAwsNetworkPeeringConfig <a name="DataHcpAwsNetworkPeeringConfig" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_aws_network_peering

dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hvn_id: str,
  peering_id: str,
  id: str = None,
  project_id: str = None,
  timeouts: DataHcpAwsNetworkPeeringTimeouts = None,
  wait_for_active_state: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.hvnId">hvn_id</a></code> | <code>str</code> | The ID of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.peeringId">peering_id</a></code> | <code>str</code> | The ID of the network peering. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.63.0/docs/data-sources/aws_network_peering#id DataHcpAwsNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the network peering is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeouts">DataHcpAwsNetworkPeeringTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.waitForActiveState">wait_for_active_state</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, Terraform will wait for the network peering to reach an `ACTIVE` state before continuing. Default `false`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.hvnId"></a>

```python
hvn_id: str
```

- *Type:* str

The ID of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.63.0/docs/data-sources/aws_network_peering#hvn_id DataHcpAwsNetworkPeering#hvn_id}

---

##### `peering_id`<sup>Required</sup> <a name="peering_id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.peeringId"></a>

```python
peering_id: str
```

- *Type:* str

The ID of the network peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.63.0/docs/data-sources/aws_network_peering#peering_id DataHcpAwsNetworkPeering#peering_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.63.0/docs/data-sources/aws_network_peering#id DataHcpAwsNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where the network peering is located.

Always matches the HVN's project.
If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.63.0/docs/data-sources/aws_network_peering#project_id DataHcpAwsNetworkPeering#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.timeouts"></a>

```python
timeouts: DataHcpAwsNetworkPeeringTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeouts">DataHcpAwsNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.63.0/docs/data-sources/aws_network_peering#timeouts DataHcpAwsNetworkPeering#timeouts}

---

##### `wait_for_active_state`<sup>Optional</sup> <a name="wait_for_active_state" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringConfig.property.waitForActiveState"></a>

```python
wait_for_active_state: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, Terraform will wait for the network peering to reach an `ACTIVE` state before continuing. Default `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.63.0/docs/data-sources/aws_network_peering#wait_for_active_state DataHcpAwsNetworkPeering#wait_for_active_state}

---

### DataHcpAwsNetworkPeeringTimeouts <a name="DataHcpAwsNetworkPeeringTimeouts" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_aws_network_peering

dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.63.0/docs/data-sources/aws_network_peering#read DataHcpAwsNetworkPeering#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.63.0/docs/data-sources/aws_network_peering#read DataHcpAwsNetworkPeering#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpAwsNetworkPeeringTimeoutsOutputReference <a name="DataHcpAwsNetworkPeeringTimeoutsOutputReference" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_aws_network_peering

dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeouts">DataHcpAwsNetworkPeeringTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataHcpAwsNetworkPeeringTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.dataHcpAwsNetworkPeering.DataHcpAwsNetworkPeeringTimeouts">DataHcpAwsNetworkPeeringTimeouts</a>]

---




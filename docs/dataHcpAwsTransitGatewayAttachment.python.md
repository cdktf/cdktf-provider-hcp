# `dataHcpAwsTransitGatewayAttachment` Submodule <a name="`dataHcpAwsTransitGatewayAttachment` Submodule" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpAwsTransitGatewayAttachment <a name="DataHcpAwsTransitGatewayAttachment" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/aws_transit_gateway_attachment hcp_aws_transit_gateway_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_aws_transit_gateway_attachment

dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment(
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
  transit_gateway_attachment_id: str,
  id: str = None,
  project_id: str = None,
  timeouts: DataHcpAwsTransitGatewayAttachmentTimeouts = None,
  wait_for_active_state: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.hvnId">hvn_id</a></code> | <code>str</code> | The ID of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | The user-settable name of the transit gateway attachment in HCP. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/aws_transit_gateway_attachment#id DataHcpAwsTransitGatewayAttachment#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the transit gateway attachment is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeouts">DataHcpAwsTransitGatewayAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.waitForActiveState">wait_for_active_state</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, Terraform will wait for the transit gateway attachment to reach an `ACTIVE` state before continuing. Default `false`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.hvnId"></a>

- *Type:* str

The ID of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/aws_transit_gateway_attachment#hvn_id DataHcpAwsTransitGatewayAttachment#hvn_id}

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.transitGatewayAttachmentId"></a>

- *Type:* str

The user-settable name of the transit gateway attachment in HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/aws_transit_gateway_attachment#transit_gateway_attachment_id DataHcpAwsTransitGatewayAttachment#transit_gateway_attachment_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/aws_transit_gateway_attachment#id DataHcpAwsTransitGatewayAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where the transit gateway attachment is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/aws_transit_gateway_attachment#project_id DataHcpAwsTransitGatewayAttachment#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeouts">DataHcpAwsTransitGatewayAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/aws_transit_gateway_attachment#timeouts DataHcpAwsTransitGatewayAttachment#timeouts}

---

##### `wait_for_active_state`<sup>Optional</sup> <a name="wait_for_active_state" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.Initializer.parameter.waitForActiveState"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, Terraform will wait for the transit gateway attachment to reach an `ACTIVE` state before continuing. Default `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/aws_transit_gateway_attachment#wait_for_active_state DataHcpAwsTransitGatewayAttachment#wait_for_active_state}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.resetWaitForActiveState">reset_wait_for_active_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.putTimeouts"></a>

```python
def put_timeouts(
  default: str = None
) -> None
```

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/aws_transit_gateway_attachment#default DataHcpAwsTransitGatewayAttachment#default}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_wait_for_active_state` <a name="reset_wait_for_active_state" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.resetWaitForActiveState"></a>

```python
def reset_wait_for_active_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataHcpAwsTransitGatewayAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_aws_transit_gateway_attachment

dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_aws_transit_gateway_attachment

dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_aws_transit_gateway_attachment

dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_aws_transit_gateway_attachment

dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataHcpAwsTransitGatewayAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataHcpAwsTransitGatewayAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataHcpAwsTransitGatewayAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/aws_transit_gateway_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpAwsTransitGatewayAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.providerTransitGatewayAttachmentId">provider_transit_gateway_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference">DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.hvnIdInput">hvn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeouts">DataHcpAwsTransitGatewayAttachmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.transitGatewayAttachmentIdInput">transit_gateway_attachment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.waitForActiveStateInput">wait_for_active_state_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.hvnId">hvn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.waitForActiveState">wait_for_active_state</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `provider_transit_gateway_attachment_id`<sup>Required</sup> <a name="provider_transit_gateway_attachment_id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.providerTransitGatewayAttachmentId"></a>

```python
provider_transit_gateway_attachment_id: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.timeouts"></a>

```python
timeouts: DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference">DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference</a>

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `hvn_id_input`<sup>Optional</sup> <a name="hvn_id_input" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.hvnIdInput"></a>

```python
hvn_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataHcpAwsTransitGatewayAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeouts">DataHcpAwsTransitGatewayAttachmentTimeouts</a>]

---

##### `transit_gateway_attachment_id_input`<sup>Optional</sup> <a name="transit_gateway_attachment_id_input" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.transitGatewayAttachmentIdInput"></a>

```python
transit_gateway_attachment_id_input: str
```

- *Type:* str

---

##### `wait_for_active_state_input`<sup>Optional</sup> <a name="wait_for_active_state_input" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.waitForActiveStateInput"></a>

```python
wait_for_active_state_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.hvnId"></a>

```python
hvn_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.transitGatewayAttachmentId"></a>

```python
transit_gateway_attachment_id: str
```

- *Type:* str

---

##### `wait_for_active_state`<sup>Required</sup> <a name="wait_for_active_state" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.waitForActiveState"></a>

```python
wait_for_active_state: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpAwsTransitGatewayAttachmentConfig <a name="DataHcpAwsTransitGatewayAttachmentConfig" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_aws_transit_gateway_attachment

dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hvn_id: str,
  transit_gateway_attachment_id: str,
  id: str = None,
  project_id: str = None,
  timeouts: DataHcpAwsTransitGatewayAttachmentTimeouts = None,
  wait_for_active_state: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.hvnId">hvn_id</a></code> | <code>str</code> | The ID of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | The user-settable name of the transit gateway attachment in HCP. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/aws_transit_gateway_attachment#id DataHcpAwsTransitGatewayAttachment#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the transit gateway attachment is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeouts">DataHcpAwsTransitGatewayAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.waitForActiveState">wait_for_active_state</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, Terraform will wait for the transit gateway attachment to reach an `ACTIVE` state before continuing. Default `false`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.hvnId"></a>

```python
hvn_id: str
```

- *Type:* str

The ID of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/aws_transit_gateway_attachment#hvn_id DataHcpAwsTransitGatewayAttachment#hvn_id}

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.transitGatewayAttachmentId"></a>

```python
transit_gateway_attachment_id: str
```

- *Type:* str

The user-settable name of the transit gateway attachment in HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/aws_transit_gateway_attachment#transit_gateway_attachment_id DataHcpAwsTransitGatewayAttachment#transit_gateway_attachment_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/aws_transit_gateway_attachment#id DataHcpAwsTransitGatewayAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where the transit gateway attachment is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/aws_transit_gateway_attachment#project_id DataHcpAwsTransitGatewayAttachment#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.timeouts"></a>

```python
timeouts: DataHcpAwsTransitGatewayAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeouts">DataHcpAwsTransitGatewayAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/aws_transit_gateway_attachment#timeouts DataHcpAwsTransitGatewayAttachment#timeouts}

---

##### `wait_for_active_state`<sup>Optional</sup> <a name="wait_for_active_state" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentConfig.property.waitForActiveState"></a>

```python
wait_for_active_state: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, Terraform will wait for the transit gateway attachment to reach an `ACTIVE` state before continuing. Default `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/aws_transit_gateway_attachment#wait_for_active_state DataHcpAwsTransitGatewayAttachment#wait_for_active_state}

---

### DataHcpAwsTransitGatewayAttachmentTimeouts <a name="DataHcpAwsTransitGatewayAttachmentTimeouts" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_aws_transit_gateway_attachment

dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeouts(
  default: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/aws_transit_gateway_attachment#default DataHcpAwsTransitGatewayAttachment#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/aws_transit_gateway_attachment#default DataHcpAwsTransitGatewayAttachment#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference <a name="DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_aws_transit_gateway_attachment

dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeouts">DataHcpAwsTransitGatewayAttachmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataHcpAwsTransitGatewayAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.dataHcpAwsTransitGatewayAttachment.DataHcpAwsTransitGatewayAttachmentTimeouts">DataHcpAwsTransitGatewayAttachmentTimeouts</a>]

---




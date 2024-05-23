# `logStreamingDestination` Submodule <a name="`logStreamingDestination` Submodule" id="@cdktf/provider-hcp.logStreamingDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogStreamingDestination <a name="LogStreamingDestination" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination hcp_log_streaming_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import log_streaming_destination

logStreamingDestination.LogStreamingDestination(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  cloudwatch: LogStreamingDestinationCloudwatch = None,
  datadog: LogStreamingDestinationDatadog = None,
  splunk_cloud: LogStreamingDestinationSplunkCloud = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.name">name</a></code> | <code>str</code> | The HCP Log Streaming Destination’s name. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch">LogStreamingDestinationCloudwatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#cloudwatch LogStreamingDestination#cloudwatch}. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.datadog">datadog</a></code> | <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog">LogStreamingDestinationDatadog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#datadog LogStreamingDestination#datadog}. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.splunkCloud">splunk_cloud</a></code> | <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud">LogStreamingDestinationSplunkCloud</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#splunk_cloud LogStreamingDestination#splunk_cloud}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.name"></a>

- *Type:* str

The HCP Log Streaming Destination’s name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#name LogStreamingDestination#name}

---

##### `cloudwatch`<sup>Optional</sup> <a name="cloudwatch" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.cloudwatch"></a>

- *Type:* <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch">LogStreamingDestinationCloudwatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#cloudwatch LogStreamingDestination#cloudwatch}.

---

##### `datadog`<sup>Optional</sup> <a name="datadog" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.datadog"></a>

- *Type:* <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog">LogStreamingDestinationDatadog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#datadog LogStreamingDestination#datadog}.

---

##### `splunk_cloud`<sup>Optional</sup> <a name="splunk_cloud" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.splunkCloud"></a>

- *Type:* <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud">LogStreamingDestinationSplunkCloud</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#splunk_cloud LogStreamingDestination#splunk_cloud}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putCloudwatch">put_cloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putDatadog">put_datadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putSplunkCloud">put_splunk_cloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.resetCloudwatch">reset_cloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.resetDatadog">reset_datadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.resetSplunkCloud">reset_splunk_cloud</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cloudwatch` <a name="put_cloudwatch" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putCloudwatch"></a>

```python
def put_cloudwatch(
  external_id: str,
  region: str,
  role_arn: str,
  log_group_name: str = None
) -> None
```

###### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putCloudwatch.parameter.externalId"></a>

- *Type:* str

The external_id to provide when assuming the aws IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#external_id LogStreamingDestination#external_id}

---

###### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putCloudwatch.parameter.region"></a>

- *Type:* str

The region the CloudWatch destination is set up to stream to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#region LogStreamingDestination#region}

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putCloudwatch.parameter.roleArn"></a>

- *Type:* str

The role_arn that will be assumed to stream logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#role_arn LogStreamingDestination#role_arn}

---

###### `log_group_name`<sup>Optional</sup> <a name="log_group_name" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putCloudwatch.parameter.logGroupName"></a>

- *Type:* str

The log_group_name of the CloudWatch destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#log_group_name LogStreamingDestination#log_group_name}

---

##### `put_datadog` <a name="put_datadog" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putDatadog"></a>

```python
def put_datadog(
  api_key: str,
  endpoint: str,
  application_key: str = None
) -> None
```

###### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putDatadog.parameter.apiKey"></a>

- *Type:* str

The value for the DD-API-KEY to send when making requests to DataDog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#api_key LogStreamingDestination#api_key}

---

###### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putDatadog.parameter.endpoint"></a>

- *Type:* str

The Datadog endpoint to send logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#endpoint LogStreamingDestination#endpoint}

---

###### `application_key`<sup>Optional</sup> <a name="application_key" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putDatadog.parameter.applicationKey"></a>

- *Type:* str

The value for the DD-APPLICATION-KEY to send when making requests to DataDog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#application_key LogStreamingDestination#application_key}

---

##### `put_splunk_cloud` <a name="put_splunk_cloud" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putSplunkCloud"></a>

```python
def put_splunk_cloud(
  endpoint: str,
  token: str
) -> None
```

###### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putSplunkCloud.parameter.endpoint"></a>

- *Type:* str

The Splunk Cloud endpoint to send logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#endpoint LogStreamingDestination#endpoint}

---

###### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.putSplunkCloud.parameter.token"></a>

- *Type:* str

The authentication token that will be used by the platform to access Splunk Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#token LogStreamingDestination#token}

---

##### `reset_cloudwatch` <a name="reset_cloudwatch" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.resetCloudwatch"></a>

```python
def reset_cloudwatch() -> None
```

##### `reset_datadog` <a name="reset_datadog" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.resetDatadog"></a>

```python
def reset_datadog() -> None
```

##### `reset_splunk_cloud` <a name="reset_splunk_cloud" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.resetSplunkCloud"></a>

```python
def reset_splunk_cloud() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LogStreamingDestination resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import log_streaming_destination

logStreamingDestination.LogStreamingDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import log_streaming_destination

logStreamingDestination.LogStreamingDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import log_streaming_destination

logStreamingDestination.LogStreamingDestination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import log_streaming_destination

logStreamingDestination.LogStreamingDestination.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LogStreamingDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogStreamingDestination to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogStreamingDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogStreamingDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference">LogStreamingDestinationCloudwatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.datadog">datadog</a></code> | <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference">LogStreamingDestinationDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.splunkCloud">splunk_cloud</a></code> | <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference">LogStreamingDestinationSplunkCloudOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.streamingDestinationId">streaming_destination_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.cloudwatchInput">cloudwatch_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch">LogStreamingDestinationCloudwatch</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.datadogInput">datadog_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog">LogStreamingDestinationDatadog</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.splunkCloudInput">splunk_cloud_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud">LogStreamingDestinationSplunkCloud</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloudwatch`<sup>Required</sup> <a name="cloudwatch" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.cloudwatch"></a>

```python
cloudwatch: LogStreamingDestinationCloudwatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference">LogStreamingDestinationCloudwatchOutputReference</a>

---

##### `datadog`<sup>Required</sup> <a name="datadog" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.datadog"></a>

```python
datadog: LogStreamingDestinationDatadogOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference">LogStreamingDestinationDatadogOutputReference</a>

---

##### `splunk_cloud`<sup>Required</sup> <a name="splunk_cloud" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.splunkCloud"></a>

```python
splunk_cloud: LogStreamingDestinationSplunkCloudOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference">LogStreamingDestinationSplunkCloudOutputReference</a>

---

##### `streaming_destination_id`<sup>Required</sup> <a name="streaming_destination_id" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.streamingDestinationId"></a>

```python
streaming_destination_id: str
```

- *Type:* str

---

##### `cloudwatch_input`<sup>Optional</sup> <a name="cloudwatch_input" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.cloudwatchInput"></a>

```python
cloudwatch_input: typing.Union[IResolvable, LogStreamingDestinationCloudwatch]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch">LogStreamingDestinationCloudwatch</a>]

---

##### `datadog_input`<sup>Optional</sup> <a name="datadog_input" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.datadogInput"></a>

```python
datadog_input: typing.Union[IResolvable, LogStreamingDestinationDatadog]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog">LogStreamingDestinationDatadog</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `splunk_cloud_input`<sup>Optional</sup> <a name="splunk_cloud_input" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.splunkCloudInput"></a>

```python
splunk_cloud_input: typing.Union[IResolvable, LogStreamingDestinationSplunkCloud]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud">LogStreamingDestinationSplunkCloud</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogStreamingDestinationCloudwatch <a name="LogStreamingDestinationCloudwatch" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import log_streaming_destination

logStreamingDestination.LogStreamingDestinationCloudwatch(
  external_id: str,
  region: str,
  role_arn: str,
  log_group_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.externalId">external_id</a></code> | <code>str</code> | The external_id to provide when assuming the aws IAM role. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.region">region</a></code> | <code>str</code> | The region the CloudWatch destination is set up to stream to. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.roleArn">role_arn</a></code> | <code>str</code> | The role_arn that will be assumed to stream logs. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.logGroupName">log_group_name</a></code> | <code>str</code> | The log_group_name of the CloudWatch destination. |

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

The external_id to provide when assuming the aws IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#external_id LogStreamingDestination#external_id}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.region"></a>

```python
region: str
```

- *Type:* str

The region the CloudWatch destination is set up to stream to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#region LogStreamingDestination#region}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The role_arn that will be assumed to stream logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#role_arn LogStreamingDestination#role_arn}

---

##### `log_group_name`<sup>Optional</sup> <a name="log_group_name" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

The log_group_name of the CloudWatch destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#log_group_name LogStreamingDestination#log_group_name}

---

### LogStreamingDestinationConfig <a name="LogStreamingDestinationConfig" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import log_streaming_destination

logStreamingDestination.LogStreamingDestinationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  cloudwatch: LogStreamingDestinationCloudwatch = None,
  datadog: LogStreamingDestinationDatadog = None,
  splunk_cloud: LogStreamingDestinationSplunkCloud = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.name">name</a></code> | <code>str</code> | The HCP Log Streaming Destination’s name. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch">LogStreamingDestinationCloudwatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#cloudwatch LogStreamingDestination#cloudwatch}. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.datadog">datadog</a></code> | <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog">LogStreamingDestinationDatadog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#datadog LogStreamingDestination#datadog}. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.splunkCloud">splunk_cloud</a></code> | <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud">LogStreamingDestinationSplunkCloud</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#splunk_cloud LogStreamingDestination#splunk_cloud}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The HCP Log Streaming Destination’s name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#name LogStreamingDestination#name}

---

##### `cloudwatch`<sup>Optional</sup> <a name="cloudwatch" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.cloudwatch"></a>

```python
cloudwatch: LogStreamingDestinationCloudwatch
```

- *Type:* <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch">LogStreamingDestinationCloudwatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#cloudwatch LogStreamingDestination#cloudwatch}.

---

##### `datadog`<sup>Optional</sup> <a name="datadog" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.datadog"></a>

```python
datadog: LogStreamingDestinationDatadog
```

- *Type:* <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog">LogStreamingDestinationDatadog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#datadog LogStreamingDestination#datadog}.

---

##### `splunk_cloud`<sup>Optional</sup> <a name="splunk_cloud" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.splunkCloud"></a>

```python
splunk_cloud: LogStreamingDestinationSplunkCloud
```

- *Type:* <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud">LogStreamingDestinationSplunkCloud</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#splunk_cloud LogStreamingDestination#splunk_cloud}.

---

### LogStreamingDestinationDatadog <a name="LogStreamingDestinationDatadog" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import log_streaming_destination

logStreamingDestination.LogStreamingDestinationDatadog(
  api_key: str,
  endpoint: str,
  application_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.property.apiKey">api_key</a></code> | <code>str</code> | The value for the DD-API-KEY to send when making requests to DataDog. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.property.endpoint">endpoint</a></code> | <code>str</code> | The Datadog endpoint to send logs to. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.property.applicationKey">application_key</a></code> | <code>str</code> | The value for the DD-APPLICATION-KEY to send when making requests to DataDog. |

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

The value for the DD-API-KEY to send when making requests to DataDog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#api_key LogStreamingDestination#api_key}

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

The Datadog endpoint to send logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#endpoint LogStreamingDestination#endpoint}

---

##### `application_key`<sup>Optional</sup> <a name="application_key" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.property.applicationKey"></a>

```python
application_key: str
```

- *Type:* str

The value for the DD-APPLICATION-KEY to send when making requests to DataDog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#application_key LogStreamingDestination#application_key}

---

### LogStreamingDestinationSplunkCloud <a name="LogStreamingDestinationSplunkCloud" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import log_streaming_destination

logStreamingDestination.LogStreamingDestinationSplunkCloud(
  endpoint: str,
  token: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud.property.endpoint">endpoint</a></code> | <code>str</code> | The Splunk Cloud endpoint to send logs to. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud.property.token">token</a></code> | <code>str</code> | The authentication token that will be used by the platform to access Splunk Cloud. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

The Splunk Cloud endpoint to send logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#endpoint LogStreamingDestination#endpoint}

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud.property.token"></a>

```python
token: str
```

- *Type:* str

The authentication token that will be used by the platform to access Splunk Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/log_streaming_destination#token LogStreamingDestination#token}

---

## Classes <a name="Classes" id="Classes"></a>

### LogStreamingDestinationCloudwatchOutputReference <a name="LogStreamingDestinationCloudwatchOutputReference" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import log_streaming_destination

logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.resetLogGroupName">reset_log_group_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_group_name` <a name="reset_log_group_name" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.resetLogGroupName"></a>

```python
def reset_log_group_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch">LogStreamingDestinationCloudwatch</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogStreamingDestinationCloudwatch]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch">LogStreamingDestinationCloudwatch</a>]

---


### LogStreamingDestinationDatadogOutputReference <a name="LogStreamingDestinationDatadogOutputReference" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import log_streaming_destination

logStreamingDestination.LogStreamingDestinationDatadogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.resetApplicationKey">reset_application_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_application_key` <a name="reset_application_key" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.resetApplicationKey"></a>

```python
def reset_application_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.applicationKeyInput">application_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.applicationKey">application_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog">LogStreamingDestinationDatadog</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `application_key_input`<sup>Optional</sup> <a name="application_key_input" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.applicationKeyInput"></a>

```python
application_key_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `application_key`<sup>Required</sup> <a name="application_key" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.applicationKey"></a>

```python
application_key: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogStreamingDestinationDatadog]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog">LogStreamingDestinationDatadog</a>]

---


### LogStreamingDestinationSplunkCloudOutputReference <a name="LogStreamingDestinationSplunkCloudOutputReference" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import log_streaming_destination

logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud">LogStreamingDestinationSplunkCloud</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogStreamingDestinationSplunkCloud]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud">LogStreamingDestinationSplunkCloud</a>]

---



